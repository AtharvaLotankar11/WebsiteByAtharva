package com.example.airline.model;
import javax.persistence.*;

@Entity
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String departure;
    private String arrival;
    private String dateOfDeparture;
    private String dateOfArrival;
    private int numOfPassengers;

    // Getters and setters
    public void setId (Long id) {
        this.id = id;
    }
    public void setDeparture (String departure) {
        this.departure = departure;
    }
    public void setArrival (String arrival) {
        this.arrival = arrival;
    }
    public void setDateOfDeparture(String dateOfDeparture) {
        this.dateOfDeparture = dateOfDeparture;
    }
    public void setDateOfArrival (String dateOfArrival) {
        this.dateOfArrival = dateOfArrival;
    }
    public void setNumOfPassengers(int numOfPassengers) {
        this.numOfPassengers = numOfPassengers;
    }
    public long getId() {
        return id;
    }
    public String getdeparture() {
        return departure;
    }
    public String getArrival() {
        return arrival;
    }
    public String getDateOfDeparture() {
        return dateOfDeparture;
    }
    public String getDateOfArrival() {
        return dateOfArrival;
    }
    public int getNumOfPassengers() {
        return numOfPassengers;
    }
}
