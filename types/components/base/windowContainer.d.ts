import React from 'react';
import { Tool } from '../../common/tool';
export interface CustomWindowContainerProps {
    tool: Tool;
    children?: React.ReactNode;
}
export type CustomWindowContainer = React.FC<CustomWindowContainerProps>;
