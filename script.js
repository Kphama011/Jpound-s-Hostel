
    let selectedRoom = null;


    let selectedBeds = [];


    let bookedBeds = {};


    // Create 7 rooms

    for (
        let i = 1;
        i <= 7;
        i++
    ) {

        bookedBeds[i] = [];

    }



    // SELECT ROOM

    function selectRoom(room) {


        // Remove previous selection

        for (
            let i = 1;
            i <= 7;
            i++
        ) {

            document
                .getElementById(
                    "room" + i
                )
                .classList
                .remove(
                    "selected-room"
                );

        }


        selectedRoom = room;


        selectedBeds = [];


        document
            .getElementById(
                "room" + room
            )
            .classList
            .add(
                "selected-room"
            );


        document
            .getElementById(
                "bedSection"
            )
            .style
            .display = "block";


        document
            .getElementById(
                "roomTitle"
            )
            .innerHTML =
            "Step 2: Select Beds in Room "
            + room;


        updateBeds();

    }



    // UPDATE BED STATUS

    function updateBeds() {


        let beds = [
            "A1",
            "A2",
            "B1",
            "B2"
        ];


        beds.forEach(
            function(bed) {


                let element =
                    document
                    .getElementById(bed);


                element
                    .classList
                    .remove(
                        "selected-bed"
                    );


                element
                    .classList
                    .remove(
                        "booked-bed"
                    );


                if (

                    bookedBeds[
                        selectedRoom
                    ]
                    .includes(bed)

                ) {

                    element
                        .classList
                        .add(
                            "booked-bed"
                        );

                }


            }
        );

    }



    // SELECT BED

    function selectBed(bed) {


        if (

            selectedRoom === null

        ) {

            alert(
                "Please select a room first."
            );

            return;

        }


        if (

            bookedBeds[
                selectedRoom
            ]
            .includes(bed)

        ) {

            return;

        }


        let element =
            document
            .getElementById(bed);


        if (

            selectedBeds
            .includes(bed)

        ) {


            selectedBeds =
                selectedBeds.filter(

                    function(item) {

                        return item !== bed;

                    }

                );


            element
                .classList
                .remove(
                    "selected-bed"
                );


        }

        else {


            if (

                selectedBeds.length < 4

            ) {


                selectedBeds
                    .push(bed);


                element
                    .classList
                    .add(
                        "selected-bed"
                    );


            }

        }

    }



    // CONFIRM BOOKING

    function bookRoom() {


        let name =
            document
            .getElementById(
                "guestName"
            )
            .value;


        let email =
            document
            .getElementById(
                "guestEmail"
            )
            .value;


        let checkIn =
            document
            .getElementById(
                "checkIn"
            )
            .value;


        let checkOut =
            document
            .getElementById(
                "checkOut"
            )
            .value;


        let payment =
            document
            .getElementById(
                "paymentMethod"
            )
            .value;


        let message =
            document
            .getElementById(
                "message"
            );


        if (

            selectedRoom === null

        ) {

            message.innerHTML =
                "Please select a room.";

            message.style.color =
                "red";

            return;

        }


        if (

            selectedBeds.length === 0

        ) {

            message.innerHTML =
                "Please select at least one bed.";

            message.style.color =
                "red";

            return;

        }


        if (

            name === ""
            ||
            email === ""

        ) {

            message.innerHTML =
                "Please enter your name and email.";

            message.style.color =
                "red";

            return;

        }


        if (

            checkIn === ""
            ||
            checkOut === ""

        ) {

            message.innerHTML =
                "Please select check-in and check-out dates.";

            message.style.color =
                "red";

            return;

        }


        if (

            payment === ""

        ) {

            message.innerHTML =
                "Please select a payment method.";

            message.style.color =
                "red";

            return;

        }


        // Save selected beds
        selectedBeds.forEach(function(bed) {
            bookedBeds[selectedRoom].push(bed);
        });

        message.innerHTML =
            "Booking request successful! " +
            "Room " +
            selectedRoom +
            " has been selected. " +
            "Beds: " +
            selectedBeds.join(", ") +
            ". Payment method: " +
            payment +
            ".";

        message.style.color = "green";
        selectedBeds = [];
        updateBeds();
    }