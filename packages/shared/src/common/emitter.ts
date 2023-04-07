import mitt from 'mitt'

type Events = {
  SCROLL_ANCHOR: string
}

export const emitter = mitt<Events>() // inferred as Emitter<Events>
