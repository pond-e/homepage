import { useState, useEffect } from 'react';
const HeroView = () => {
    const [elementWidth, setElementWidth] = useState('80%');
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;

            if (currentPosition <= 300) {
                setElementWidth(`${90 + (currentPosition / 300 * 10)}%`);
            } else if (currentPosition > 300) {
                setElementWidth('100%');
            } else {
                setElementWidth('80%');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div
                className="bg-[url(./images/pond3.png)] bg-fixed bg-center mx-auto rounded-t-[100px]"
                style={{
                    width: elementWidth,
                    height: '1700px',
                    marginTop: '20px',
                }}
            >
                <div className='md:pt-[50vh] md:pl-[200px] pt-[10vh]'>
                    <p className='inline font-bold text-5xl font-extrabold bottom-[20%] left-[5%] px-5 py-2 bg-black/80 text-white box-decoration-clone leading-[75px]'>
                        組み込み、Web
                        <br></br>
                        Deeplearning
                    </p>
                </div>
                <div className='pt-[100px] md:pl-[200px] text-black font-bold'>
                    <p className='inline text-2xl'>
                        幅広く
                        <br></br>
                        興味の赴くままに
                        <br></br>
                        ものづくりをしています。
                    </p>
                </div>
                <div className='pt-[100px] md:pl-[200px] text-black font-bold'>
                    <p className='inline text-2xl'>
                        2024年に筑波大学へ編入しました。
                        <br></br>
                        情報科学類に編入後は
                        <br></br>
                        競プロをしたり
                        <br></br>
                        CanSatを開発しました。
                    </p>
                </div>
                <div className='pt-[100px] md:pl-[200px] text-black font-bold'>
                    <p className='inline text-2xl'>
                        明石高専出身で
                        <br></br>
                        高専では缶サット、競プロ、CTF
                        <br></br>
                        Unity、高専DCONなど色々な活動をしました。
                    </p>
                </div>
                <div className='pt-[100px] md:pl-[200px] text-black font-bold'>
                    <p className='inline text-2xl'>
                        その過程で得た技術をもとに
                        <br></br>
                        記事を書いたり、
                        <br></br>
                        ものづくりをしたり
                        <br></br>
                        しています。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroView;