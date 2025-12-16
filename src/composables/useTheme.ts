import { ref, onMounted, watch } from 'vue'

type Theme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'fyx-theme-preference'

// Shared reactive state (singleton pattern)
const currentTheme = ref<Theme>('system')
const isDark = ref(false)

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme
  isDark.value = resolvedTheme === 'dark'

  if (resolvedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function useTheme() {
  onMounted(() => {
    // Load saved preference or default to system
    const savedTheme = (localStorage.getItem(STORAGE_KEY) as Theme) || 'system'
    currentTheme.value = savedTheme
    applyTheme(savedTheme)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (currentTheme.value === 'system') {
        applyTheme('system')
      }
    }
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange)
  })

  // Watch for theme changes and persist
  watch(currentTheme, (newTheme) => {
    localStorage.setItem(STORAGE_KEY, newTheme)
    applyTheme(newTheme)
  })

  function toggleTheme() {
    // Cycle: system -> light/dark (based on current system) -> opposite -> back to cycle
    const current = currentTheme.value
    if (current === 'system') {
      // If system is dark, go to light; if system is light, go to dark
      currentTheme.value = getSystemTheme() === 'dark' ? 'light' : 'dark'
    } else if (current === 'light') {
      currentTheme.value = 'dark'
    } else {
      currentTheme.value = 'light'
    }
  }

  return {
    currentTheme,
    isDark,
    toggleTheme
  }
}
