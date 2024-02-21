import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritoState = {
  favoritos: Produto[]
}

const initialState: favoritoState = {
  favoritos: []
}

const favoritoSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (!state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
