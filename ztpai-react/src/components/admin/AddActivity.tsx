import React from 'react';
import NavAdmin from "./NavAdmin";
import './admin.css'

function AddActivity() {


    return (

        <body>
        <div className="base-container">
          <NavAdmin/>

            <main>


                <section className="admin">
                    <h1>Adding activities</h1>
                    <form >

                    <table>

                        <tr>
                            <th>#</th>
                            <th>Activity</th>
                            <th>Day</th>
                            <th>Hour</th>
                            <th>Availability</th>

                        </tr>

                        <tbody id="tbody"></tbody>
                    </table>

                    <button className="add" type="button"
                    >ADD
                    </button>

                    <button type="submit" name="send">SEND</button>
                    </form>
                </section>
            </main>
        </div>
        </body>

    );
}

export default AddActivity;
