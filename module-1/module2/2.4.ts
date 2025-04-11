{
    // interface  - generic
    
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }; 
        smartWatch: T;
        bike?: X;
    };

    type EmailabWatch = {
        brand: string;
        model: string;
        display: string;
    }
 
    const poorDeveloper: Developer<EmailabWatch> = {
        name: "sathi",
        computer: {
            brand: "Asus",
            model: "X-222UR",
            releaseYear: 2013,
        },
        smartWatch: {
           brand: "Emilab",
           model: "km66",
           display: "OLED" 
        },
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    
    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: " Rich sathi",
        computer: {
            brand: "HP",
            model: "X-222UR",
            releaseYear: 2018,
        },
        smartWatch: {
           brand: "Apple Watch",
           model: "xx-6",
          heartTrack: true,
          sleepTrack: true,
        
        },

        bike: {
            model: "Yamaha",
            engineCapacity: "100cc"
        }
    }
    
    // 
}