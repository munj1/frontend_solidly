import React, { useState, useEffect, useCallback } from 'react'

import classes from './ssBribes.module.css'

import BribeCard from '../ssBribeCard'

import stores from '../../stores'
import { ACTIONS } from '../../stores/constants'
import {
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Typography,
  Tooltip,
  Toolbar,
  IconButton,
  TextField,
  InputAdornment,
  Popper,
  Fade,
  Grid,
  Switch
} from '@material-ui/core'

import { useRouter } from 'next/router'
import BigNumber from 'bignumber.js'
import FilterListIcon from '@material-ui/icons/FilterList'
import SearchIcon from '@material-ui/icons/Search'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

export default function ssBribes () {
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  const [pairs, setPairs] = useState([])

  const onCreateBribe = () => {
    router.push('/bribe/create')
  }

  const router = useRouter()

  useEffect(() => {
    const stableSwapUpdated = () => {
      const pairs = stores.stableSwapStore.getStore('pairs')
      const pairsWithBribes = pairs.filter(pair => {
        return (
          pair &&
          pair.gauge != null &&
          pair.gauge.address &&
          pair.gauge.bribes &&
          pair.gauge.bribes.length > 0
        )
      })
      setPairs(pairsWithBribes)
      forceUpdate()
    }

    stableSwapUpdated()

    stores.emitter.on(ACTIONS.UPDATED, stableSwapUpdated)
    return () => {
      stores.emitter.removeListener(ACTIONS.UPDATED, stableSwapUpdated)
    }
  }, [])

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<AddCircleOutlineIcon />}
            size='large'
            className={classes.buttonOverride}
            // color='primary'
            onClick={onCreateBribe}
          >
            <Typography className={classes.actionButtonText}>
              Add Bribe
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <div style='margin-top: 20px'></div>
      <div className={classes.bribesContainer}>
        {pairs &&
          pairs &&
          pairs.length > 0 &&
          pairs.map(pair => {
            return pair.gauge.bribes.map(bribe => {
              return <BribeCard pair={pair} bribe={bribe} />
            })
          })}
      </div>
    </div>
  )
}
