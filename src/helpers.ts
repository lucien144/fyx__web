export const jump = (id: string) => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}
