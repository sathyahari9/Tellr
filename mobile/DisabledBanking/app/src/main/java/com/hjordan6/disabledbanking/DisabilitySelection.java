package com.hjordan6.disabledbanking;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class DisabilitySelection extends AppCompatActivity implements LocationListener {
    Button dyslexia;
    Button readOutLoud;
    Button largeText;
    Button none_;
    protected LocationManager locationManager;
    protected LocationListener locationListener;
    private Location location;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_disablity);
        dyslexia = findViewById(R.id.dyslexia_button);
        readOutLoud = findViewById(R.id.read_out_loud_button);
        largeText = findViewById(R.id.large_text_button);
        none_ = findViewById(R.id.none_button);
        dyslexia.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                GetATMs findATMs = new GetATMs();
                findATMs.setActivity(DisabilitySelection.this);
                if ( ContextCompat.checkSelfPermission( DisabilitySelection.this, android.Manifest.permission.ACCESS_COARSE_LOCATION ) != PackageManager.PERMISSION_GRANTED ) {

                    ActivityCompat.requestPermissions( DisabilitySelection.this, new String[] {  android.Manifest.permission.ACCESS_COARSE_LOCATION  }, 0);
                }

                locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
                locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, DisabilitySelection.this);
                location = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER);
                Double lat = location.getLatitude();
                Double lng = location.getLongitude();
                findATMs.execute(lat, lng);
            }
        });
        readOutLoud.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(DisabilitySelection.this, ATM_Finder.class);
                intent.putExtra("type", "readOutLoud");
                startActivity(intent);
            }
        });
        largeText.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(DisabilitySelection.this, ATM_Finder.class);
                intent.putExtra("type", "largeText");
                startActivity(intent);
            }
        });
        none_.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(DisabilitySelection.this, ATM_Finder.class);
                intent.putExtra("type", "none");
                startActivity(intent);
            }
        });
    }

    public void swap(String json) {
        Intent intent = new Intent(DisabilitySelection.this, ATM_Finder.class);
        intent.putExtra("json", json);
        startActivity(intent);
    }

    @Override
    public void onLocationChanged(Location location) {
        // Called when a new location is found by the network location provider.

    }

    @Override
    public void onProviderDisabled(String provider) {
        Log.d("Latitude","disable");
    }

    @Override
    public void onProviderEnabled(String provider) {
        Log.d("Latitude","enable");
    }

    @Override
    public void onStatusChanged(String provider, int status, Bundle extras) {
        Log.d("Latitude","status");
    }

}
