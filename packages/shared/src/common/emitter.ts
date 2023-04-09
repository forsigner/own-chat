import mitt from 'mitt'

type Events = {
  SCROLL_ANCHOR: string
  ABORT: string
}

export const emitter = mitt<Events>() // inferred as Emitter<Events>
