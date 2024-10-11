'use client'

import {useEffect, useState} from "react";
import {Button} from "flowbite-react";

export default function SuggestPwa(){
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstallable, setIsInstallable] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            console.log('beforeinstallprompt event fired');

            e.preventDefault();
            setDeferredPrompt(e);
            setIsInstallable(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {

            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            setDeferredPrompt(null);
            setIsInstallable(false);
        }
    };

    return <div>
        {isInstallable && (
            <Button color='light' id="install-button" className='z-40' onClick={handleInstallClick} >
                Əsas ekrana əlavə et
            </Button>
        )}
    </div>
}