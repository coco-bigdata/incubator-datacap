const createHeaders = (i18n: any) => {
    return [
        {key: 'id', hidden: true, header: i18n.t('common.id')},
        {key: 'name', hidden: true, header: i18n.t('common.name')},
        {key: 'code', hidden: true, header: i18n.t('common.code')},
        {key: 'description', hidden: true, header: i18n.t('common.description')},
        {key: 'createTime', hidden: true, header: i18n.t('common.createTime')},
        {key: 'updateTime', hidden: true, header: i18n.t('common.updateTime')},
        {key: 'action', hidden: true, header: i18n.t('common.action'), slot: 'action', class: 'text-center'}
    ]
}

export {
    createHeaders
}
