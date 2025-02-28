import { SelectedPage } from "@/utils/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page : string;
    selectedPage : SelectedPage;
    setSelectedPage: (value : SelectedPage) => void;
    
}

function Link({ page, selectedPage, setSelectedPage,}: Props) {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  

  return (
    <AnchorLink 
    className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300
    `}

    href={`#${lowerCasePage}`}   //refer to ID 
    onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link
