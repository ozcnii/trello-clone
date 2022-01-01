import { configureStore, combineReducers} from '@reduxjs/toolkit'
import BoardReducer from '../pages/board/Slices/BoardSlice'

const rootReducer = combineReducers({
  BoardReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']