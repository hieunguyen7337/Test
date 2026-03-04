'use strict';

/**
 * Migration: 20240325164109_pfwionjvcqbajpd
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yzkwsdymgi', function(table) {
    table.string('bkrdqemzoc');
    table.text('jdtrsmujwy');
    table.string('nqjxklfaxu');
    table.json('txairwfpcp');
    table.string('ltdqsxonry');
    table.timestamp('wncveyostq');
    table.bigInteger('dwadvbizxi');
    table.string('zubzwdjskm');
    table.bigInteger('fwkxhuzhpm');
  });
  await knex.schema.alterTable('rluqrpvlur', function(table) {
    table.bigInteger('qzggrifyml');
    table.bigInteger('tnixsnnago');
    table.timestamp('uvstabcevy');
    table.float('zbtxmubxhs');
    table.bigInteger('siwkrzyvzw');
    table.json('szfyupgzzm');
    table.boolean('tgcofwhwqo');
  });
  await knex.schema.alterTable('acbkoyiomc', function(table) {
    table.json('lcaxnkbwxt');
    table.float('xxydkfijnu');
    table.text('sasizleruo');
    table.json('nfuxrgmrnk');
    table.boolean('nxlvaafhjv');
    table.float('hggbjsoffu');
  });
  await knex.schema.alterTable('fvshuqcolu', function(table) {
    table.float('iqcjxlleel');
    table.timestamp('vxqyhkfqxa');
    table.float('jzdrzsxekq');
    table.timestamp('gcxuaipwna');
    table.integer('oocbtahqwh');
    table.timestamp('amvsoeutwo');
    table.text('otkkihnmjd');
  });
  await knex.schema.alterTable('jtzechhjgn', function(table) {
    table.timestamp('eshvobjxsc');
    table.json('sjriysmity');
    table.integer('aquwcpthkb');
    table.float('dvbqzjemvc');
    table.integer('zvtrftqogs');
    table.text('eixatbjtio');
    table.text('lnmvelzayw');
    table.float('eshgttosqd');
  });
  await knex.schema.alterTable('zdyyumyuyy', function(table) {
    table.integer('eitikitlqe');
    table.json('trmpatmmfd');
    table.bigInteger('joqnyrtgle');
    table.float('njapfqusas');
    table.float('cafsxnakds');
    table.integer('gxydympjli');
  });
  await knex.schema.alterTable('pjmjcbgpcn', function(table) {
    table.text('uvatippnny');
    table.string('uhtesplcyj');
    table.boolean('vitfdhscme');
    table.timestamp('xabkmoncnc');
    table.boolean('noxzercrkl');
  });
  await knex.schema.alterTable('puwzzvtigl', function(table) {
    table.float('pfmyzguzjt');
    table.boolean('ncvoyukjhj');
    table.timestamp('lslfjgzxch');
    table.text('iravagzytt');
  });
  await knex.schema.alterTable('rwcwefpxgh', function(table) {
    table.string('dzocelrcmd');
    table.integer('zasaqaryoa');
    table.timestamp('ytjsyocrrp');
    table.integer('bjcdnvngdm');
    table.bigInteger('lhjovglexx');
    table.timestamp('wlywxhppyl');
    table.string('cfqnqabarw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};