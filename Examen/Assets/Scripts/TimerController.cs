using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TimerController : MonoBehaviour
{
    public static TimerController instance;

    public Text timeCounter;

    private TimeSpan timePlaying;
    private bool timerGoing;
    private float elapsedTime;

    private void Awake()
    {
        instance = this;
    }

    // Standard text value of the timer
    private void Start()
    {
        timeCounter.text = "Time: 00:00:00";
        timerGoing = false;
        instance.BeginTimer();
    }

    // Start running the timer
    public void BeginTimer()
    {
        timerGoing = true;
        elapsedTime = 0f;
        StartCoroutine(UpdateTimer());
        
    }

    private void StartCoroutine(IEnumerable enumerable)
    {
        throw new NotImplementedException();
    }

    // End the timer
    public void EndTimer()
    {
        timerGoing = false;
    }

    // Update the timer per second
    private IEnumerable UpdateTimer()
    {
        while (timerGoing)
        {
            elapsedTime += Time.deltaTime;
            timePlaying = TimeSpan.FromSeconds(elapsedTime);
            string timePlayingStr = "Time: " + timePlaying.ToString("mm' : 'ss' . 'f");
            timeCounter.text = timePlayingStr;

            yield return null;
        }
    }
}
