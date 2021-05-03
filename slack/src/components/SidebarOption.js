import React from 'react';
import styled from 'styled-components';

function SidebarOption({Icon, title}) {
  return (
    <SidebarOptionContainer>
      <Icon />
      <h3> {title} </h3>
    </SidebarOptionContainer>
  )
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  flex: 1;
`;
