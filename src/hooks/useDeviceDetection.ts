import { useEffect, useState } from "react";

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export function useDeviceDetection(): DeviceType {
    const [device, setDevice] = useState<DeviceType>('desktop');

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        
        const isMobile = /mobile|android|iphone|ipod|windows phone/i.test(userAgent);
        const isTablet = /tablet|ipad|playbook|silk/i.test(userAgent) && !/mobile/i.test(userAgent);
        
        if (isMobile) {
            setDevice('mobile');
        } else if (isTablet) {
            setDevice('tablet');
        } else {
            setDevice('desktop');
        }
    }, []);

    return device;
}