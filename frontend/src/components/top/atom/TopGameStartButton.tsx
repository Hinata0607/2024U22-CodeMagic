import { Button } from "@mui/material"

export const TopGameStartButton = () => {
    return (
        <Button
            color="primary"
            variant="contained"
            sx={{
                zIndex: 50,
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                width: "500px",
                height: "70px",
                maxWidth: "90vw",
                margin: "0 auto",
                transform: "translateY(-50%)",
                fontSize: "1.5rem"
            }}
        >
            GAME START
        </Button>
    )
}
