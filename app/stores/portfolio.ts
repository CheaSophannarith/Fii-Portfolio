import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    // Your portfolio data
    investments: [] as Investment[],
    totalValue: 0,
    isLoading: false,
  }),

  getters: {
    // Computed properties
    investmentCount: (state) => state.investments.length,

    totalProfit: (state) => {
      return state.investments.reduce((sum, investment) => {
        return sum + (investment.currentValue - investment.initialValue)
      }, 0)
    },
  },

  actions: {
    // Methods to modify state
    async fetchInvestments() {
      this.isLoading = true
      try {
        // Example API call
        // const data = await $fetch('/api/investments')
        // this.investments = data

        // For now, using dummy data
        this.investments = [
          {
            id: 1,
            name: 'FII HGLG11',
            initialValue: 10000,
            currentValue: 12000,
            shares: 100,
          },
          {
            id: 2,
            name: 'FII KNRI11',
            initialValue: 8000,
            currentValue: 9500,
            shares: 80,
          },
        ]

        this.calculateTotalValue()
      } catch (error) {
        console.error('Failed to fetch investments:', error)
      } finally {
        this.isLoading = false
      }
    },

    addInvestment(investment: Investment) {
      this.investments.push(investment)
      this.calculateTotalValue()
    },

    removeInvestment(id: number) {
      this.investments = this.investments.filter(inv => inv.id !== id)
      this.calculateTotalValue()
    },

    calculateTotalValue() {
      this.totalValue = this.investments.reduce((sum, inv) => sum + inv.currentValue, 0)
    },
  },
})

// Type definitions
interface Investment {
  id: number
  name: string
  initialValue: number
  currentValue: number
  shares: number
}
