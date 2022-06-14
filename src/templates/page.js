import React from 'react'
import Banner from '../components/Banner';
import ColoredBanner from '../components/ColoredBanner';
import PlainText from '../components/PlainText';
import Text from '../components/Text';
const page = ({ pageContext: { page }}) => {
    console.log(page.sections.sections);
    let sections = page.sections.sections 
    return (
        <div>
            {
                sections.map((section, index) => {
                    const typeName = section.__typename;

                    switch(typeName){
                    case 'WpPage_Sections_Sections_Text':
                        return <Text {...section} key={index}/>
                    case 'WpPage_Sections_Sections_Banner':
                        return <Banner {...section} key={index}/>
                    case 'WpPage_Sections_Sections_BannerWithColor':
                        return <ColoredBanner {...section} key={index}/>
                    case 'WpPage_Sections_Sections_PlainText':
                        return <PlainText {...section} key={index}/>
                    
                    default: 
                    return <p>No section</p>
                    }              
                })
            }
        </div>
  )
}

export default page