package com.hjordan6.disabledbanking;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class BlindSelection extends AppCompatActivity {
    Button blind;
    Button notBlind;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bind_selection);
        blind = findViewById(R.id.blind_button);
        notBlind = findViewById(R.id.not_blind_button);
        blind.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(BlindSelection.this, ATM_Finder.class);
                intent.putExtra("type", "blind");
                startActivity(intent);
            }
        });
        notBlind.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(BlindSelection.this, DisabilitySelection.class);
                startActivity(intent);
            }
        });

    }

    public void swap(String json) {
        Intent intent = new Intent(BlindSelection.this, ATM_Finder.class);
        intent.putExtra("json", json);
        startActivity(intent);
    }
}
