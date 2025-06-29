// src/components/TabMenu/TabMenu.tsx
import React from 'react';
import styled from 'styled-components';

interface TabProps {
  activeTab: string;
  onTabChange: (tab: 'disaster' | 'pest') => void;
}

const TabWrapper = styled.div`
  width: 100%; // 또는 max-width: inherit;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const TabContainer = styled.div`
  display: flex;
  width: 50%; /* FileUpload보다 좁게 (반절 정도) */
  min-width: 250px;
  max-width: 500px;
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%; /* 모바일 대응 */
  }
`;

const TabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${({ $active }) => ($active ? '#FBBF77' : '#F4F4F4')};
  color: black;
  border: none;
  border-right: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:last-child {
    border-right: none;
  }
`;

const TabMenu: React.FC<TabProps> = ({ activeTab, onTabChange }) => (
  <TabWrapper>
    <TabContainer>
      <TabButton
        $active={activeTab === 'disaster'}
        onClick={() => onTabChange('disaster')}
      >
        재난/재해
      </TabButton>
      <TabButton
        $active={activeTab === 'pest'}
        onClick={() => onTabChange('pest')}
      >
        병해충
      </TabButton>
    </TabContainer>
  </TabWrapper>
);

export default TabMenu;