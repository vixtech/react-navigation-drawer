import * as React from 'react';
import { ViewStyle } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
declare type Renderer = (props: {
    progress: Animated.Node<number>;
}) => React.ReactNode;
declare type Props = {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
    onGestureRef?: (ref: PanGestureHandler | null) => void;
    onOverlayRef?: (ref: Animated.View | null) => void;
    gestureEnabled: boolean;
    drawerPosition: 'left' | 'right';
    drawerType: 'front' | 'back' | 'slide';
    keyboardDismissMode: 'none' | 'on-drag';
    swipeEdgeWidth: number;
    swipeDistanceThreshold?: number;
    swipeVelocityThreshold: number;
    hideStatusBar: boolean;
    statusBarAnimation: 'slide' | 'none' | 'fade';
    overlayStyle?: ViewStyle;
    drawerStyle?: ViewStyle;
    sceneContainerStyle?: ViewStyle;
    renderDrawerContent: Renderer;
    renderSceneContent: Renderer;
    gestureHandlerProps?: React.ComponentProps<typeof PanGestureHandler>;
};
export default class Drawer extends React.PureComponent<Props> {
    static defaultProps: {
        gestureEnabled: boolean;
        drawerPostion: string;
        drawerType: string;
        swipeEdgeWidth: number;
        swipeVelocityThreshold: number;
        keyboardDismissMode: string;
        hideStatusBar: boolean;
        statusBarAnimation: string;
    };
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    private clock;
    private isDrawerTypeFront;
    private isOpen;
    private nextIsOpen;
    private isSwiping;
    private gestureState;
    private touchX;
    private velocityX;
    private gestureX;
    private offsetX;
    private position;
    private containerWidth;
    private drawerWidth;
    private drawerOpacity;
    private drawerPosition;
    private touchDistanceFromDrawer;
    private swipeDistanceThreshold;
    private swipeVelocityThreshold;
    private currentOpenValue;
    private pendingOpenValue;
    private isStatusBarHidden;
    private manuallyTriggerSpring;
    private transitionTo;
    private dragX;
    private translateX;
    private progress;
    private handleGestureEvent;
    private handleGestureStateChange;
    private handleTapStateChange;
    private handleContainerLayout;
    private handleDrawerLayout;
    private toggleDrawer;
    private toggleStatusBar;
    render(): JSX.Element;
}
export {};
