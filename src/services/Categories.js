import { getRealm } from './Realm'

import { v4 as uuid } from 'uuid'

export const getDefaultCategories = () => {
    return [
        {
            id: uuid(),
            name: 'Alimentação',
            isDebit: true,
            color: '#1abc9c',
            order: 0
        },
        {
            id: uuid(),
            name: 'Casa',
            color: '#2ecc71',
            isDebit: true,
            order: 1,
        },
        {
            id: uuid(),
            name: 'Educação',
            color: '#3498db',
            isDebit: true,
            order: 2,
        },
        {
            id: uuid(),
            name: 'Faturas',
            color: '#9b59b6',
            isDebit: true,
            order: 3,
        },
        {
            id: uuid(),
            name: 'Lazer',
            color: '#f1c40f',
            isDebit: true,
            order: 4,
        },
        {
            id: uuid(),
            name: 'Outros Gastos',
            color: '#f39c12',
            isDebit: true,
            order: 5,
        },
        {
            id: uuid(),
            name: 'Poupança',
            color: '#e67e22',
            isDebit: true,
            order: 6,
        },
        {
            id: uuid(),
            name: 'Saúde',
            color: '#d35400',
            isDebit: true,
            order: 7,
        },
        {
            id: uuid(),
            name: 'Taxas',
            color: '#e74c3c',
            isDebit: true,
            order: 8,
        },
        {
            id: uuid(),
            name: 'Transporte',
            color: '#c0392b',
            isDebit: true,
            order: 9,
        },
        {
            id: uuid(),
            name: 'Veículo',
            color: '#ecf0f1',
            isDebit: true,
            order: 10,
        },
        {
            id: uuid(),
            name: 'Viagens',
            color: '#bdc3c7',
            isDebit: true,
            order: 11,
        },
        {
            id: uuid(),
            name: 'Adiantamento',
            color: '#273c75',
            isCredit: true,
            order: 1,
        },
        {
            id: uuid(),
            name: 'Outros Ganhos',
            color: '#4cd137',
            isCredit: true,
            order: 2,
        },
        {
            id: uuid(),
            name: 'Renda Extra',
            color: '#487eb0',
            isCredit: true,
            order: 3,
        },
        {
            id: uuid(),
            name: 'Salário',
            color: '#8c7ae6',
            isCredit: true,
            order: 4,
        },
        {
            id: uuid(),
            name: 'Saldo Inicial',
            color: '#27ae60',
            isInit: true,
            order: 5,
        },
    ]
}

export const getAllCategories = async () => {
    const realm = await getRealm()

    return realm.objects('Category').sorted('order')
}

export const getDebitCategories = async () => {
    const realm = await getRealm()

    return realm
        .objects('Category')
        .filtered('isDebit = true AND isInit = false')
        .sorted('order')
}

export const getCreditCategories = async () => {
    const realm = await getRealm()

    return realm
        .objects('Category')
        .filtered('isCredit = true AND isInit = false')
        .sorted('order')
}

export const getInitCategories = async () => {
    const realm = await getRealm()

    return realm
        .objects('Category')
        .filtered('isInit = true')
        .sorted('order')
}
