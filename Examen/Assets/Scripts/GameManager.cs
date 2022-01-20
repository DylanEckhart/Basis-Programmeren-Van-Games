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

    private void FixedUpdate()
    {
        vehicleSpeed = RR.motorForce;
        updateNeedle();
    }

    public void updateNeedle()
    {
        desiredPosition = startPosition - endPosition;
        float temp = vehicleSpeed / 180;
        Needle.transform.eulerAngles = new Vector3(0, 0, (startPosition - temp * desiredPosition));
    }
}
