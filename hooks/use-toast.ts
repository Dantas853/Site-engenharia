// Este é um hook simplificado para o exemplo
export function useToast() {
  return {
    toast: ({ title, description }: { title: string; description: string }) => {
      console.log(`Toast: ${title} - ${description}`)
      // Em um projeto real, você usaria um componente de toast
    },
  }
}