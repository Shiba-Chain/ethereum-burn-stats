import { HStack, VStack, Text } from "@chakra-ui/react";
import { ethers } from "ethers";

export interface GasUsedProps {
  gasUsed: ethers.BigNumber
  gasLimit: ethers.BigNumber
}

export function GasTarget(props: GasUsedProps) {
  const gasTarget = props.gasLimit.toNumber() / 2

  return (
    <VStack alignItems="flex-start">
      <HStack>
        <Text size="sm">{gasTarget.toLocaleString(undefined, {'minimumFractionDigits': 0, 'maximumFractionDigits': 0})}</Text>
      </HStack>
    </VStack>
  )
}

export function GasUsed(props: GasUsedProps) {
  const gasUsed = props.gasUsed.toNumber()

  return (
    <VStack alignItems="flex-start">
      <HStack>
        <Text size="sm">{gasUsed.toLocaleString(undefined, {'minimumFractionDigits': 0, 'maximumFractionDigits': 0})}</Text>
      </HStack>
    </VStack>
  )
}

export function GasUsedPercent(props: GasUsedProps) {
  const gasUsed = props.gasUsed.toNumber()
  const gasTarget = props.gasLimit.toNumber() / 2
  const percentage = gasUsed / gasTarget * 100

  return (
    <VStack alignItems="flex-start">
      <HStack>
        <Text size="sm">{percentage.toFixed(0)}%</Text>
      </HStack>
    </VStack>
  )
}