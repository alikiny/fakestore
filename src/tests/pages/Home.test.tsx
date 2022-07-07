import { customRender } from "../utils/render"

import Home from "../../pages/Home"

describe('Test Home page', () => {
    test('Should match page snapshot', () => {
        const component = customRender(<Home />)
        expect(component).toMatchSnapshot()
    })
    test('Should have Homebanner and Collections', () => {
        const { container } = customRender(<Home />)
        const collection = container.getElementsByClassName('home__collection')
        const homebanner = container.getElementsByClassName('banner')
        expect(collection.length).toEqual(1)
        expect(homebanner.length).toEqual(1)
    })
})