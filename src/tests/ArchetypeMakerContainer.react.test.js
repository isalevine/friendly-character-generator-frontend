import React from 'react';
import renderer from 'react-test-renderer';
import ArchetypeMakerContainer from '../containers/ArchetypeMakerContainer';

test ('ArchetypeMakerContainer is a renderable component', () => {
    const component = renderer.create(
        <ArchetypeMakerContainer />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

