/**
 * Onboarding utilities for Solstice Protocol
 * Shared utilities to check wallet verification status
 */

/**
 * Check if a wallet has completed onboarding
 */
export function isOnboardingComplete(walletAddress: string | null): boolean {
  if (!walletAddress) return false;
  
  const onboardingKey = `solstice_onboarded_${walletAddress}`;
  return localStorage.getItem(onboardingKey) === 'true';
}

/**
 * Get onboarding status details
 */
export function getOnboardingData(walletAddress: string) {
  return {
    isComplete: isOnboardingComplete(walletAddress),
    completedAt: localStorage.getItem(`solstice_onboarded_at_${walletAddress}`),
  };
}
