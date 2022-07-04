import React from 'react'
import { fireEvent, customRender } from '../utils/render'

import LoginModal from "../../components/LoginModal"

describe('Test LoginModal', () => {
    test('test button clicked', () => {
        const { container, queryAllByText } = customRender(<LoginModal />)
        const buttonArr = container.getElementsByClassName('btn--login')
        const button = buttonArr[0]
        expect(queryAllByText('Create new account').length).toEqual(0)
        expect(buttonArr.length).toEqual(1)
        fireEvent.click(button)
        expect(queryAllByText('Create new account').length).toEqual(1)
    })
})