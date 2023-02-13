const createDefaultOptions = (i18n: any) => {
  return {
    enableSorting: true,
    enableFilter: true,
    enableColResize: true,
    showToolPanel: false,
    contractColumnSelection: true,
    toolPanelSuppressRowGroups: true,
    rowDragManaged: true,
    animateRows: true,
    allowContextMenuWithControlKey: true,
    // Fixed issues: https://github.com/EdurtIO/datacap/issues/219
    suppressFieldDotNotation: true,
    localeText: {
      page: i18n.t('grid.page'),
      more: i18n.t('grid.more'),
      to: i18n.t('grid.to'),
      of: i18n.t('grid.of'),
      next: i18n.t('grid.next'),
      last: i18n.t('grid.last'),
      first: i18n.t('grid.first'),
      previous: i18n.t('grid.previous'),
      loadingOoo: i18n.t('grid.loadingOoo'),
      selectAll: i18n.t('grid.selectAll'),
      searchOoo: i18n.t('grid.searchOoo'),
      blanks: i18n.t('grid.blanks'),
      filterOoo: i18n.t('grid.filterOoo'),
      applyFilter: i18n.t('grid.applyFilter'),
      equals: i18n.t('grid.equals'),
      notEqual: i18n.t('grid.notEqual'),
      lessThan: i18n.t('grid.lessThan'),
      greaterThan: i18n.t('grid.greaterThan'),
      lessThanOrEqual: i18n.t('grid.lessThanOrEqual'),
      greaterThanOrEqual: i18n.t('grid.greaterThanOrEqual'),
      inRange: i18n.t('grid.inRange'),
      contains: i18n.t('grid.contains'),
      notContains: i18n.t('grid.notContains'),
      startsWith: i18n.t('grid.startsWith'),
      endsWith: i18n.t('grid.endsWith'),
      group: i18n.t('grid.group'),
      columns: i18n.t('grid.columns'),
      rowGroupColumns: i18n.t('grid.rowGroupColumns'),
      rowGroupColumnsEmptyMessage: i18n.t('grid.rowGroupColumnsEmptyMessage'),
      valueColumns: i18n.t('grid.valueColumns'),
      pivotMode: i18n.t('grid.pivotMode'),
      groups: i18n.t('grid.groups'),
      values: i18n.t('grid.values'),
      pivots: i18n.t('grid.values'),
      valueColumnsEmptyMessage: i18n.t('grid.valueColumnsEmptyMessage'),
      pivotColumnsEmptyMessage: i18n.t('grid.pivotColumnsEmptyMessage'),
      noRowsToShow: i18n.t('grid.noRowsToShow'),
      pinColumn: i18n.t('grid.pinColumn'),
      valueAggregation: i18n.t('grid.valueAggregation'),
      autosizeThiscolumn: i18n.t('grid.autosizeThiscolumn'),
      autosizeAllColumns: i18n.t('grid.autosizeAllColumns'),
      groupBy: i18n.t('grid.groupBy'),
      ungroupBy: i18n.t('grid.ungroupBy'),
      resetColumns: i18n.t('grid.resetColumns'),
      expandAll: i18n.t('grid.expandAll'),
      collapseAll: i18n.t('grid.collapseAll'),
      toolPanel: i18n.t('grid.toolPanel'),
      export: i18n.t('grid.export'),
      csvExport: i18n.t('grid.csvExport'),
      excelExport: i18n.t('grid.excelExport'),
      pinLeft: i18n.t('grid.pinLeft'),
      pinRight: i18n.t('grid.pinRight'),
      noPin: i18n.t('grid.noPin'),
      sum: i18n.t('grid.sum'),
      min: i18n.t('grid.min'),
      max: i18n.t('grid.max'),
      none: i18n.t('grid.none'),
      count: i18n.t('grid.count'),
      average: i18n.t('grid.average'),
      copy: i18n.t('grid.copy'),
      copyWithHeaders: i18n.t('grid.copyWithHeaders'),
      ctrlC: i18n.t('grid.ctrlC'),
      paste: i18n.t('grid.paste'),
      ctrlV: i18n.t('grid.ctrlV'),
    },
    defaultColDef: {
      editable: true,
      sortable: true,
      filter: true,
      resizable: true
    }
  }
}

export {
  createDefaultOptions
};