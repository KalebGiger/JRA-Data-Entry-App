import React from "react";
import { InputButton } from './InputButton'
import { ComponentConfig } from './ComponentConfig'

export function ListItem(props) {
    const {
        key,
        item,
        className
    } = props
    
    function openConfig(){
        return(
            <ComponentConfig
                key={key}
            />
        )
    }

    return (
        <InputButton
            className={className}
            content={item}
            onClick={openConfig}
        />
    );
};

export const List = props => {
    console.log(props.list)
    return (
        <>
            {props.componentList.map((item, index) => (
                <div>
                    <ListItem
                        key={index}
                        item={item.name}
                        className={props.className}
                    />
                </div>
            ))}
        </>
    );
};