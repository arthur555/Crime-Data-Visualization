import React from 'react';
import logo from './Crime_Map_Logo.jpg';

import styled from 'react-emotion';

const Navbar = styled('div')`
  width: 100%;
  background-color: black;
  height: 80px;
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
  justify-content: center;
`;

const FilterText = styled('div')`
  color: white;
  text-align: center;
  font-size: 24px;
`;

const SelectionRow = styled('div')`
  display: flex;
  padding: 0 5px;
`;

const Selection = styled('button')`
  margin: 0 10px;
`;

const CitySelector = styled('div')`
  background-color: pink;
  width: 200px;
  position: relative;
  cursor: pointer;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropDownHeader = styled('div')``;

const DropDownTitle = styled('div')``;

const DropDown = styled('div')`
  background-color: white;
  position: absolute;
  top: 80px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  width: 100%;
`;

const DropdownItem = styled('div')`
  :hover {
    background-color: #aaa;
  }
`;

//Class for the Header
class Header extends React.Component {
  state = {
    showMenu: false
  };

  render() {
    const { cities, currentCity, onCitySelected } = this.props;
    const { showMenu } = this.state;
    return (
      <>
        <Navbar>
          <Logo src={logo} />
          <FilterToolbox>
            <FilterText>Filter by</FilterText>
            <SelectionRow>
              <Selection>Population</Selection>
              <Selection>Type</Selection>
              <Selection>Crime Map Safety Index</Selection>
              <Selection>Recency</Selection>
            </SelectionRow>
          </FilterToolbox>
          <CitySelector onClick={() => this.setState({ showMenu: !showMenu })}>
            <DropDownHeader>
              <DropDownTitle>{currentCity || 'Select City'}</DropDownTitle>
            </DropDownHeader>
            {showMenu && (
              <DropDown>
                {cities.map(city => (
                  <DropdownItem key={city} onClick={() => onCitySelected(city)}>
                    {city}
                  </DropdownItem>
                ))}
              </DropDown>
            )}
          </CitySelector>
        </Navbar>
      </>
    );
  }
}

export { Header };
