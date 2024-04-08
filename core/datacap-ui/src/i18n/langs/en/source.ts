export default {
    common: {
        list: 'Source List',
        modify: 'Modify Source [ $NAME ]',
        source: 'Source',
        configure: 'Configure',
        authorization: 'Authorization',
        advanced: 'Advanced',
        custom: 'Custom',
        host: 'Host Address',
        port: 'Port',
        name: 'Name',
        username: 'Username',
        password: 'Password',
        database: 'Database',
        ssl: 'SSL',
        file: 'File',
        create: 'Create Source',
        delete: 'Delete Source [ $NAME ]',
        syncMetadata: 'Sync Metadata',
        syncHistory: 'Sync History',
        manager: 'Data Manager',
        info: 'Basic Information',
        notSpecified: 'Not Specified',
        notUpdated: 'Not Updated',
        engine: 'Engine',
        notSpecifiedEngine: 'Not Specified Engine',
        collation: 'Collation',
        notSpecifiedCollation: 'Not Specified Collation',
        dataInfo: 'Data Information',
        totalRows: 'Total Rows',
        format: 'Format',
        notSpecifiedFormat: 'Not Specified Format',
        avgRowLength: 'Average Row Length',
        dataSize: 'Data Size',
        indexSize: 'Index Size',
        notSpecifiedIndex: 'Not Specified Index',
        autoIncrement: 'Auto Increment',
        notSpecifiedPrimaryKey: 'Not Specified Primary Key',
        resetAutoIncrement: 'Reset Auto Increment',
        resetTo: 'Reset to',
        comment: 'Table Comment',
        menuNew: 'New',
        menuNewTable: 'New Table',
        tableName: 'Table Name',
        columnName: 'Column Name',
        columnType: 'Column Type',
        columnLength: 'Column Length',
        columnDefaultValue: 'Default Value',
        columnPrimaryKey: 'Primary Key',
        columnAutoIncrement: 'Auto Increment',
        columnIsNullable: 'Is Nullable',
        columnComment: 'Column Comment',
        newColumn: 'New Column',
    },
    tip: {
        selectSource: 'Please select a source',
        deleteSuccess: 'Delete source [ $NAME ] success',
        deleteAlert1: 'You are deleting a data source. This action permanently deletes all data and configurations associated with that data source. Please be sure to confirm your actions before proceeding.',
        deleteAlert2: 'Warning: Doing this will not be undone. All data and configurations associated with that data source will be permanently deleted.',
        deleteAlert3: 'To confirm, type [ $NAME ] in the box below',
        syncMetadata1: 'Sync metadata will run in the background',
        syncMetadata2: 'Synchronizing metadata will overwrite the current metadata, which may result in data loss.',
        syncMetadata3: 'To confirm, type [ $NAME ] in the box below',
        syncMetadata4: 'Task [ $NAME ] has started',
        selectDatabase: 'Please select a database',
        notSelectedNode: 'Please select the node on the left to display the results',
        resetAutoIncrementSuccess: 'Reset auto increment to [ $VALUE ] success',
        createTableSuccess: 'Create table [ $VALUE ] success',
        createColumnSuccess: 'Create column [ $VALUE ] success'
    }
}