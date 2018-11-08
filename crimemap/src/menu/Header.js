import React from 'react';
import logo from './Crime_Map_Logo.jpg';

import styled from 'react-emotion';

const Navbar = styled('div')`
  width: 100%;
  background-color: black;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled('img')`
  max-width: 100%;
  max-height: 100%;
`;

const FilterToolbox = styled('div')`
  display: flex;
  flex-direction: column;
`;

const FilterText = styled('div')`
  color: white;
  text-align: center;
`;

const SelectionRow = styled('div')`
  display: flex;
`;

const Selection = styled('button')``;

const CitySelector = styled('div')`
  background-color: pink;
  width: 100px;
`;

function Header() {
  return (
    <Navbar>
      <Logo src={logo} />
      <FilterToolbox>
        <FilterText>Filter by</FilterText>
        <SelectionRow>
          <Selection>AAA</Selection>
          <Selection>AAA</Selection>
          <Selection>AAA</Selection>
          <Selection>AAA</Selection>
        </SelectionRow>
      </FilterToolbox>
      <CitySelector />
    </Navbar>
  );
}

export { Header };
