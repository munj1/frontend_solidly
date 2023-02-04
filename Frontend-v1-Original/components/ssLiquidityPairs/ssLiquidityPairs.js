import React, { useState, useEffect, useCallback } from 'react'
import { Typography } from '@mui/material'

import classes from './ssLiquidityPairs.module.css'

import PairsTable from './ssLiquidityPairsTable.js'

import stores from '../../stores'
import { ACTIONS } from '../../stores/constants'

export default function ssLiquidityPairs () {
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  const [pairs, setPairs] = useState([])
  const [pairBalancesLoading, setPairBalancesLoading] = useState(false)

  console.log('dunks pairs', pairs)

  useEffect(() => {
    const stableSwapUpdated = () => {
      setPairs(stores.stableSwapStore.getStore('pairs'))
      forceUpdate()
    }

    setPairs(stores.stableSwapStore.getStore('pairs'))

    console.log('dunksset', setPairs)

    stores.emitter.on(ACTIONS.UPDATED, stableSwapUpdated)
    return () => {
      stores.emitter.removeListener(ACTIONS.UPDATED, stableSwapUpdated)
    }
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.descriptionBox}>
        <Typography variant='h1'>Liquidity Pools</Typography>
        <Typography variant='body2'>
          Pair your tokens to provide liquidity. Stake the LP tokens to earn
          FLOW
        </Typography>
      </div>
      <PairsTable pairs={pairs} />
    </div>
  )
}
