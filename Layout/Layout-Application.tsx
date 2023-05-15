import FooterApplication from '@/components/Footer-application';
import Menu_ruts from '@/components/Menu';
import Head from 'next/head';

function LayoutApplication({ children, page }: { children: React.ReactNode, page: string }) {

    return (
        <div>
            <Head>
                <title>{page}</title>
            </Head>
            <Menu_ruts />
            {children}
            <FooterApplication />
        </div>
    );
}

export default LayoutApplication;