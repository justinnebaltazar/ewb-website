const styles = {
    section: {
        padding: '80px 20px',
        textAlign: 'center',
        backgroundColor: '#00345c',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    message: {
        fontSize: '24px',
        color: '#fff',
        fontFamily: 'Poppins',
        fontWeight: 'bold'
    },
};

export const Events = () => {
    return (
        <section style={styles.section}>
            <div style={styles.message}>
                This page is currently a work in progress...
            </div>
        </section>
    );
};
