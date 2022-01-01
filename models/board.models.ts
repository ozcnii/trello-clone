export interface ICard {
  value: string,
  id: string,
}

export interface IColumn {
  name: string,
  id: string,
  cards: ICard[]
}

export interface IBackground {
  isImage: boolean,
  background: string
}

export interface BoardState {
  background: IBackground,
  columns: IColumn[]
}

export interface ICreateCard {
  columnId: string,
  value: string,
}
