import Script from 'next/script'
export default function Snackbar() {
    return (
        <>
            {/* Snackbar // documentation: https://www.polonel.com/snackbar/ */}
            {/* Snackbar for user status switcher */}
            <Script id="snackbar-inline-script">

                {
                    $('#snackbar-user-status label').click(function () {
                        Snackbar.show({
                            text: 'Your status has been changed!',
                            pos: 'bottom-center',
                            showAction: false,
                            actionText: "Dismiss",
                            duration: 3000,
                            textColor: '#fff',
                            backgroundColor: '#383838'
                        })
                    }
                    )}
            </Script>
        </>
    )
}