import * as types from './mutation-types'

import { ipcRenderer } from 'electron'
import * as ipcTypes from 'main/ipcTypes'
import _ from 'lodash'

export const loadFonts = ({ commit, state }) => {
  // Load fonts via node
  ipcRenderer.send(ipcTypes.LOAD_FONTS)

  ipcRenderer.on(ipcTypes.FONTS_LOADED, (event, fonts) => {
    console.time('Sorting fonts object by name')
    const sortedFonts = _.sortBy(fonts, 'family')
    console.timeEnd('Sorting fonts object by name')

    commit(types.LOAD_FONTS, sortedFonts)

    console.time('Grouping fonts')
    const groupedFonts = _.groupBy(sortedFonts, value => value.family)
    const flattenedGroupedFonts = _.values(groupedFonts)
    console.log(flattenedGroupedFonts)
    console.timeEnd('Grouping fonts')

    commit(types.LOAD_GROUPED_FONTS, flattenedGroupedFonts)
  })
}
