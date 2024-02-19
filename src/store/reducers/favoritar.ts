import { createSlice } from '@reduxjs/toolkit'

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
      if (state.favoritos.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = produto.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
