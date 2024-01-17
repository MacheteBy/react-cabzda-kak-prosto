import React from 'react';
import S from './Select.module.css'

type SelectPropsType = {
    selectItems: ItemsType[],
    selectValue: any,
    onClick: (selectCollapsed: boolean) => void,
    selectCollapsed: boolean,
    onClickMenu: (value: any) => void,
}

type ItemsType = {
    title: string, 
    value: any
}

export const Select = (props: SelectPropsType) => {

    return (
        <div>
            <div className={S.wrapper} onClick={() => {props.onClick(!props.selectCollapsed)}}>{props.selectValue}</div>
            {props.selectCollapsed ? 
            props.selectItems.map( i => 
            <div className={S.wrapperLists} key={i.value} onClick={()=> {props.onClickMenu(i.title)}}>{i.title}</div>) : ''}
        </div>
    );
};

export default Select;