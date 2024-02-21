import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type favoritoState = {
  favoritos: Produto[]
}

const initialState: favoritoState = {
  favoritos: []
}

const removeFavoritoSlice = createSlice({
  name: 'remover',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.favoritos.find((p) => p.id === produto.id)) {
        state.favoritos.indexOf(produto)
      }
    }
  }
})

export const { remover } = removeFavoritoSlice.actions
export default removeFavoritoSlice.reducer
