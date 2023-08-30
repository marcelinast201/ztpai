package com.example.ztpaispring.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "my_pass",schema = "public")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Pass {
    @Id
    @GeneratedValue
    @Column(name = "id_pass")
    private UUID id;

    @Column(name = "expires")
    private Date expires;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_pricing", referencedColumnName = "id_pricing")
    private Pricing pricing;
    @JsonIgnore

    @ManyToOne
    @JoinColumn(name="id_user", nullable = false)
    private User userPass;

    public void setExpires() {
        if (this.pricing != null && this.pricing.getTerm() != null) {
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(new Date());
            calendar.add(Calendar.DAY_OF_MONTH, this.pricing.getTerm());
            this.expires = calendar.getTime();
        }
    }
}
