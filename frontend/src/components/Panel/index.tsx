import { Flex } from "@chakra-ui/react"
import PanelTab from "./PanelTab";
import PanelContent from "./PanelContent";
import { PanelPage } from "../../types";
import { useState } from "react";
import PanelTabElement from "./PanelTabElement";

interface PanelProps {
  pages: PanelPage[];
}

const Panel = ({ pages } : PanelProps) => {
  const [selectedTab, setSelectedTab]= useState<number>(0);

  return (
    <Flex flexDir='column'>
      <PanelTab>
        {
          pages.map(pageObj => 
            <PanelTabElement key={pageObj.id} icon={pageObj.tabIcon} onClick={() => { setSelectedTab(pageObj.id) }} isSelected={selectedTab === pageObj.id}>
              {pageObj.tabText}
            </PanelTabElement>
          )
        }
      </PanelTab>
      <PanelContent>
        {
          pages[selectedTab].page
        }
      </PanelContent>
    </Flex>
  )
}

export default Panel;