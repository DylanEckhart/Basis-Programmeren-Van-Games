using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public GameObject Needle;
    private float startPosition = 220f, endPosition = -46f;
    private float desiredPosition;
    public CarController RR;
    public float vehicleSpeed;

    // Pick car speed from CarController.cs
    private void FixedUpdate()
    {
        vehicleSpeed = RR.motorForce;
        updateNeedle();
    }

    // Make the needle move while the car is accelerating
    public void updateNeedle()
    {
        desiredPosition = startPosition - endPosition;
        float temp = vehicleSpeed / 180;
        Needle.transform.eulerAngles = new Vector3(0, 0, (startPosition - temp * desiredPosition));
    }
}
