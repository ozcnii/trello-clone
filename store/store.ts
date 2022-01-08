import { configureStore, combineReducers} from '@reduxjs/toolkit'
import { BoardReducer } from './Slices/Board/BoardSlice'
import { UserReducer } from './Slices/User/UserSlice'

const rootReducer = combineReducers({
  BoardReducer, UserReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']